import Tag from "./ITag"

export default interface TagsObject {
    items: Tag[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}