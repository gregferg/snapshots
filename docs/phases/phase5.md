# Phase 5: Tags and Garbage Collection

## Rails
### Models
* Tag

### Controllers
* Api::TagsController (create, destroy, index, show, update)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)
* TagsIndex
  - TagIndexItem
* TagShow
* TagForm

### Stores
* Tag

### Actions
* ApiActions.receiveAllTags -> triggered by ApiUtil
* ApiActions.receiveSingleTag
* ApiActions.deleteTag
* TagActions.fetchAllTags -> triggers ApiUtil
* TagActions.fetchSingleTag
* TagActions.createTag
* TagActions.updateTag
* TagActions.destroyTag

### ApiUtil
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleTag
* ApiUtil.createTag
* ApiUtil.updateTag
* ApiUtil.destroyTag

## Gems/Libraries
