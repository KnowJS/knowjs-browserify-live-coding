knowjs-browserify-live-coding
=============================

This is a live-hacked-in-30-minutes-or-less example 
of an node.js server that uses browserify, dnode,
and shoe to provide json rpc communication between 
client and server. Gulp is used to browserify java-
script assets from node_modules, bower_components 
(after shimming and uglifying them), and app-
specific scripts to form a naive app. We showed
off using client side rendering of swig templates, 
because why not. We also showed a client logging 
mechanism that allows the client to log directly
to the server. Fun. 
