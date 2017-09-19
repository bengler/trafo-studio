export default {
  name: "art",
  title: "Art",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Comment",
      name: "comment",
      type: "string"
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    },
    {
      title: "File",
      name: "file",
      type: "file"
    },
    {
      title: "Text",
      name: "text",
      type: "blockContent"
    },
    {
      title: "Trafo User ID",
      name: "trafoUserId",
      type: "number"
    }
    {
      title: "External ID",
      name: "externalId",
      type: "number"
    },
    {
      title: "Trafo Type",
      name: "trafoType",
      type: "string"
    }
  ]
};
