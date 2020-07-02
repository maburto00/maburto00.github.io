---
layout: post
title:  "How to configure TensorFlow on Ubuntu"
date:   2020-01-04 21:46:00 +0900
categories: research
comments: true
---
<style type="text/css">
    ol ol { list-style-type: lower-alpha; } 
    ol ol ol { list-style-type: lower-roman; }
</style>

These are the notes I took while setting up tensorflow on my computer. The notes are very messy since they were originally not intended for publication. If I find some time I will polish them a little bit. Having said so, I hope someone find them useful.
  
# Preparation on Windows before installing Ubuntu
1. Create recovery USB with BurnRecovery program
2. Disable Fast startup (https://www.tenforums.com/tutorials/4189-turn-off-fast-startup-windows-10-a.html)
    1. Configure with graphic interface 
3. Liberate space from C disk for Ubuntu (100GB)
4. Change boot order in BIOS

# Ubuntu Installation
1. Install ubuntu using a bootable USB.
    1. PROBLEM: There was a problem with the graphics card drivers while installing that prevented the installation program to continue. To fix temporarily to be able to finish the installation:
        1. Shutdown and start the computer again with the USB attached.
        2. When grub screen appears, select "Grub Ubuntu option" (BUT DONT PRESS ENTER), press 'e', find the line that starts with 'linux' and add 'modprobe.blacklist=nouveau after: quiet splash'. 
2. Partitions configuration (configure manually to prevent accidentally erasing Windows):  
    1. swap 6144MB primary - end of the parition 
    1. root / (all space left) primary - beginning of the partition 
3. Restart 
4. PROBLEM Error shows when stargint Ubuntu: Couldn't get size: 0x800000000000000e. 
5. PROBLEM Booted directly to windows, so fix the efi [3] 
    1. Note: If after installing Ubuntu, you boot directly in Windows, check in UEFI settings to change the boot order. If you see no option to set the boot to Ubuntu, you need to fix it from within Windows. When you are in Windows desktop, hover the mouse in left corner, right click and select administrator’s command prompt. Then run the following command: 
    1. bcdedit /set "{bootmgr}" path \EFI\ubuntu\grubx64.efi 
6. PROBLEM After trying to start Ubuntu a error appears (invalid key) 
    1. Enroll MOK in BIOS (or disable MOK at all, less secure but way easier)
    1. Put password
7. PROBLEM After restart again a violation error appears  
    1. Change UEFI Hard Disk Drive BBS Priorities and boot order 
8. PROBLEM The graphic card driver does not work correctly (cannot login)
    1. Edit on grub blacklist 
    2. Update on grub blacklist 
    3. Get name of nvidia card "lspci |grep -i nvidia" 
        1. 01:00.0 VGA compatible controller: NVIDIA Corporation GP104GLM [Quadro P3000 Mobile] (rev a1) 
    4. Software & updates -> Additional Drivers -> Using NVIDIA 435 (propietary test) [7] 
    5. Restart 

# Setup TF with Docker
1. Install docker [10][9] 
    1. Install 
    2. Run post-installation procedures 
    3. Install nvidia docker support [10] 
2. Get TF images for docker and test [10] 
    1. docker pull tensorflow/tensorflow:latest-gpu-jupyter 
    2. docker run -it --rm tensorflow/tensorflow \ 
        1.   python -c "import tensorflow as tf; tf.enable_eager_execution(); print(tf.reduce_sum(tf.random_normal([1000, 1000])))" 

# Setup TF with Anaconda
Install the following:
1. anaconda (download and execute) 
    1. bash Anaconda.sh 
    2. Init automatically? Yes 
    3. Disable auto-activation of  anaconda base env  
        1. conda config --set auto_activate_base false 
2. tensorflow (conda create -n tensorflow_env tensorflow 
3. pycharm (Ubuntu store) 
4. conda activate tensorflow_env 
5. conda install spyder 
6. conda install matplotlib 
 
# References: 
1. [How to Dual-Boot Windows 10 and Ubuntu (Install Ubuntu Alongside Windows)](https://www.youtube.com/watch?v=Zn6QhRrJ5jU)
2. [How to Dual-Boot Windows 10 and Ubuntu 18.04 & 16.04! (Updated tutorial on channel)](https://www.youtube.com/watch?v=qNeJvujdB-0&t=179s)
3. [How To Install Ubuntu Alongside Windows 10](https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/)
4. [Installing successfully CUDA 10.1 and Tensorflow 1.14 to enable GPU processing](https://medium.com/@fmorenovr/installing-successfully-cuda-10-1-and-tensorflow-1-14-to-enable-gpu-processing-1b220dcb23b9)
5. [How Much Swap Should You Use in Linux?How Much Swap Should You Use in Linux?](https://itsfoss.com/swap-size/)
6. [Should I create a separate /home partition?](https://www.reddit.com/r/linuxquestions/comments/a9k4nf/should_i_create_a_separate_home_partition/)
7. [2 Ways to Install Nvidia Driver on Ubuntu 18.04 (GUI & Command Line)](https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu-18-04)
8. [How to dedicate your laptop GPU to TensorFlow only, on Ubuntu 18.04.](https://towardsdatascience.com/how-to-use-tensorflow-on-the-gpu-of-your-laptop-with-ubuntu-18-04-554e1d5ea189)
9. [Get Docker Engine - Community for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
10. [Tensorflow - Install - Docker](https://www.tensorflow.org/install/docker)