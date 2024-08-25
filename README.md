# Setup MAC
Reference: https://jekyllrb.com/docs/installation/macos/
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
```brew install nodejs```
```brew install chruby ruby-install xz```
```ruby-install ruby 3.1.3```
```echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc```
```echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc```
```echo "chruby ruby-3.1.3" >> ~/.zshrc # run 'chruby' to see actual version```
open and close terminal
``ruby -v``
``gem install jekyll``
``gem install bundler``
``cd github/maburto00.github.com/``
``bundle install``

# Setup Ubuntu 
```cd github/maburto00.github.io/```
```sudo apt-get update```
```sudo apt-get install ruby-full build-essential```
```sudo apt install nodejs```
```bundle install```

sudo apt-get install ruby-full build-essential zlib1g-dev

1. Setup .bashrc
```cd $HOME```
```echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc```
```echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc```
```echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc```
```source ~/.bashrc```

To publish site locally in Windows: 
1. Open Start Command Prompt with Ruby
1. Change to gir repository folder: ```cd Documents\GitHub\maburto00.github.io```
2. Run (remove --drafts and --livereload if you don't need them): ```bundle exec jekyll serve --drafts --livereload```
1. Open in browser: [http://127.0.0.1:4000/](http://127.0.0.1:4000/)
