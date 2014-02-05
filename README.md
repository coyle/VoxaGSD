The requirements for this GSD were:

1. Consume a collection of user records.
2. On a set interval, check user records for new mail messages
3. If there are new messages, broadcast to external services.

app.js                  -- Is the main service that will be called on an interval.
task.sh                 -- Is a bash script that will call the node service every (x) amount of time.. currently I have it set to 10 seconds
listener.js             -- Is an external service that listens for the events broadcast by app.js
resources/getMessages   -- Is the function that does the heavy lifting. It will pull in the users ids, create a connection users emails, check for messages and broadcast new messages.
resources/helpers.js    -- Reads files containing context.io keys, users, and latest date service was run.
resources/date.txt      -- Holds the unix timestamp for last time email was checked
resources/keys.json     -- Holds the "key" and "secret" for the context.io API
resources/users.txt     -- Holds user ids for authenticated users


In order to use application:
1) run npm install
2) edit the resources/keys.json to add in context.io "key" and "secret"
3) edit the resources/users.txt file to add in ids of authenticated users from context.io... I have left the format ids should be in
4) run: node app.js 


