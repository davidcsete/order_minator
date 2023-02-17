FROM ruby:3.0.0-alpine

RUN apk add --update --virtual \
    runtime-deps \
    build-base \
    libxml2-dev \
    libxslt-dev \
    postgresql-dev \
    nodejs \
    yarn \
    libffi-dev \
    git \
    tzdata \
    && rm -rf /var/cache/apk/*

RUN gem install --default pg -v '1.4.3' --source 'https://rubygems.org'

WORKDIR /webapp
COPY . /webapp/

ENV BUNDLE_PATH /gems
ENV GEM_PATH /gems
ENV GEM_HOME /gems
ENV BUNDLE_APP_CONFIG /gems

RUN bundle install
RUN yarn install

ENTRYPOINT [ "bin/rails" ]
CMD [ "s", "-b", "0.0.0.0" ]
EXPOSE 3000
