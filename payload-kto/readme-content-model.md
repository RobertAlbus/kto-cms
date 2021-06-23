This list represents the allowed hierarchical relationships, but do not consider it "the" content structure. It is for illustration only.

* Site
  * Page
    * Datasource Folder (datasources that are used )
      * Banner
      * Rich Text
      * Cards
        * Card
        * Card
    * Page
      * Datasource Folder
        * Banner
        * Rich Text
    * Page
      * Datasource Folder
        * Banner
        * Rich Text
  * Page
    * Page
      * Datasource Folder
        * Banner
        * Rich Text
    * Datasource Folder
        * Banner
        * Rich Text
  * Datasource Folder (global content such as recurring CTAs) **
    * Rich Text
    * Cards
      * Card
      * Card
  * Controller Folder
    * Controller
    * Controller

** Important note

This is really where the magic of this content model is. Most other content models expect that a page's content is implicitly associated. This coupling of content and content-location means there's minimal ability to re-use content across the website, or to use similarly-shaped data for multiple purposes. For example, if a Page, a Banner, and a Card all have the fields Heading|Subheading|Body|Image|Link|LinkText then they can conceivably be used interchangeably. A Carousel of Cards can be populated by a set of discrete Card items, OR with existing Pages! A Banner can be created as a discrete item, or it can be populated by the Page itself. Since the datasource is the same in all locations there is a nice consistency with the image, the CTA link and text, etc. for this content throughout the site despite it's location. This is beyond cool and beyond useful. Do note that this example does not hold true with the current POC content model but would be close-to-trivial to implement.

A page's content must be explicitly associated with the page. The way you do this is by creating a new entry in the Rendering field of a Page. This rendering points to a Controller and a Datasource. The expected behaviour is that without a datasource, the Page itself (context item) is the datasource.
The controller is just a string that will be used in a switch statement in the front end client as a means of inserting the data into a specific component.
The datasource is the component data.


  