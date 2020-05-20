const OBJECT_TYPE = {
  LINK: 'link',
  LIST: 'list'
}

class Result {

  constructor ({
                 uid,
                 objectType,
                 url,
                 author,
                 title,
                 image,
                 description,
                 tags,
                 stars,
                 forks,
                 links,
                 sourceList,
                 linkType,
                 websiteName,
                 screenshotImage
               }) {
    this.uid = uid;
    this.object_type = objectType;
    this.link_type = linkType;
    this.title = title;
    this.website_name = websiteName;
    this.source_url = url;
    this.image_url = image;
    this.screenshot_url = screenshotImage;
    this.tags = tags;
    this.stars = stars;
    this.forks = forks;
    this.links = links;
    this.source_list = sourceList;
    this.link_type = linkType;
    this.description = description;
    this.author = author;
    this.parent_list = sourceList;
  }

  toShortVersion () {
    return {
      ...this,
      links: undefined,
      link_count: this.object_type === OBJECT_TYPE.LIST
        ? this.links.length
        : undefined
    }
  }

}

module.exports = Result;
module.exports.type = OBJECT_TYPE;
