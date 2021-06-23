# CMS Project

find a suitable CMS for modeling hierarchical content for authoring web copy. 
* started with traditional CMS' on .NET Core and various other platforms. 
* most CMS' had opinionated schemas or other shortcomings
* started looking into headless options https://jamstack.org/headless-cms/
* Payload CMS was a clear winner
* building POC in payload-kto/
* ran into bug where payload.update( // relationship field, hasMany: true, multiple collections allowed// ) is not saving the ID parameter
* contacted Payload maintainer
