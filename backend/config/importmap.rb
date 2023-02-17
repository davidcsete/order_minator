# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "vue" # @3.2.29
pin "@vue/reactivity", to: "@vue--reactivity.js" # @3.2.29
pin "@vue/runtime-core", to: "@vue--runtime-core.js" # @3.2.29
pin "@vue/runtime-dom", to: "@vue--runtime-dom.js" # @3.2.29
pin "@vue/shared", to: "@vue--shared.js" # @3.2.29
