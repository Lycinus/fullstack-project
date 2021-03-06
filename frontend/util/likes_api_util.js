import { decamelizeKeys } from "humps";

export const createLike = like => (
    $.ajax({
        method: 'POST',
        url: 'api/likes',
        data: {like: decamelizeKeys(like)}
    })
)

export const deleteLike = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/likes/${id}`,
    })
)