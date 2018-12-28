# Jabber Jaw - Chat App

<!-- ![Screenshot of Chat App Page](https://github.com/MikeyB2/travis-ci/new/master/public/img/mealsSS.PNG) -->

_website: https://jabber-jaw.herokuapp.com/_

_server website: https://jabber-jaw-server.herokuapp.com/_

_client GitHub: https://github.com/MikeyB2/jabber-jaw-client_

_server Github: https://github.com/MikeyB2/jabber-jaw-server_

Jabber Jaw is a Chat App that allows you to chat with your friends or family.  Either 1-on-1 or in a Channel/room.

After logging in or creating a user, a user has
access to the dashboard that has a list of all available Channels to join.

## Channels

You can subscribe/join any of the rooms that are listed on the left or create your own.  After clicking on the room or creating a room you will be able to send messages to that room.

## Messages

You can enter a message to send to the room by typing in the bottom send message input and hitting enter when done typing you message.


## New User/Register as a User

On the Landing page, new users can find a link up top to the login form and to create a new
account you have to click the Register link below the login inputs.
A the fields are required to set up an account.

## Technology Used

This app utilizes HTML, CSS, Javascript, and JQuery.

The client-side utilizes React and Redux for the User Experience.  Also uses Chat-Kit to help setup the chat component.

The server-side utilizes javascript, Node, Express, MongoDB & Mongoose, morgan, body-parser, and cors for Restful API construction. Passport, bcryptjs, jsonwebtoken
are used for JWT tokenization.

For testing, chai, chai-http, faker, enzyme, and mocha
are used.
