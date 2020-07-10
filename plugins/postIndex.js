import findIndex from 'lodash/findIndex'

export default (context, inject) => {
  const postIndex =  (currentSlug, posts) => {
    const returnIndex = () => findIndex(posts, {
      slug: currentSlug
    })
    const post = returnIndex()
    const prevPost = (post, postCount) => {
      if (post === 0) {
        return postCount - 1
      } else {
        return post - 1
      }
    }
    const nextPost = (post, postCount) => {
      if (post === (postCount - 1)) {
        return 0
      } else {
        return post + 1
      }
    }
    return {
      current_index: post,
      prev: prevPost(post, posts.length),
      next: nextPost(post, posts.length),
      count: posts.length
    }
  }
  inject('postIndex', postIndex)
  context.$postIndex = postIndex
}