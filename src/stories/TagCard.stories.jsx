import TagCardComponent from "../components/TagCardComponent"

export default {
    title: "Tag Card",
    component: TagCardComponent
}

const dummyTag = {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 804329,
    "name": "css"
  }

export const TagCard = () => <TagCardComponent tag={dummyTag} />