function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}
var playlist = {}
function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}
function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}
