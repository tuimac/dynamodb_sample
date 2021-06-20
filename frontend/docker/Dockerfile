FROM alpine:latest

WORKDIR /root

ADD entrypoint.sh /root/entrypoint.sh

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git bash icu-dev icu-libs vim curl ncurses tree nodejs npm && \
    mkdir /etc/vim/backup && \
    mkdir /etc/vim/undo && \
    rm /etc/vim/vimrc && \
    curl -L https://raw.githubusercontent.com/tuimac/tools/master/vim/vimrc -o /etc/vim/vimrc && \
    curl -L https://raw.githubusercontent.com/tuimac/tools/master/linux/bashrc/.bashrc_node_docker -o /root/.bashrc && \
    git clone https://github.com/tuimac/dynamodb_sample && \
    cd /root/dynamodb_sample/frontend && \
    npm install -g @angular/cli && \
    npm install && \
    git config --global user.email "tuimac.devadm01@gmail.com" && \
    git config --global user.name "tuimac"

ENTRYPOINT ["/root/entrypoint.sh"]
