FROM amazonlinux:2018.03.0.20180827
MAINTAINER https://github.com/minorut

RUN yum update -y \
 && yum install -y curl git sudo vim zsh

# Apache
# cf. https://qiita.com/suin/items/3a0361102af83d0b69aa
ARG servername=127.0.0.1:80
RUN yum install -y httpd \
 && sed -i.orig "s/^#ServerName\b.*$/ServerName ${servername}/i" /etc/httpd/conf/httpd.conf \
 && usermod -u 1000 apache \
 && groupmod -g 1000 apache
RUN mkdir -p /tmp/repo \
 && rm -rf /var/www/html \
 && ln -s /tmp/repo/public /var/www/html

# Node.js, Yarn
RUN curl --silent --location https://rpm.nodesource.com/setup_11.x | sudo bash - \
 && yum install -y nodejs \
 && npm install -g yarn \
 && yum clean all

ENV HOME=/ \
    LANG=ja_JP.utf-8 \
    TZ=Asia/Tokyo

EXPOSE 80

ENTRYPOINT ["httpd", "-DFOREGROUND"]
