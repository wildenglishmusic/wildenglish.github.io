'use strict';

angular.module('wildEnglish')

   .factory('calendarEvents', function(Restangular){
        return Restangular.one('events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU').get();
    })

   .controller('MainCtrl', function(Restangular, calendarEvents, $modal, uiCalendarConfig) {
    var self = this;
    
    calendarEvents.then(function(events){
        self.items = events.items;
    });
    
    this.today = Date.now();
   
/* Only display shows that are still on 
*  Google Calendar from right now and into 
*  the future
*/
    this.oldDates = function(eventTime){
        var old = new Date(eventTime),
            rightNow = Date.now();
        
        if (old < rightNow){
            return true;
        }
        else{
            return false;
        }};

    this.open = function () {

        var modalInstance = $modal.open({
          templateUrl: 'states/calendarModal.html',
          controller: 'ModalCtrl',
          size: 'lg',
        });
    }
       

  this.trackList = [{
"kind":"track",
"trackNum": 1,
"id":163232447,
"title":"Turn It On",
"original_format":"wav",
"license":"all-rights-reserved",
"uri":"https://api.soundcloud.com/tracks/163232447",
"user":{
    "id":62017384,
    "kind":"user",
    "permalink":"wildenglish",
    "username":"Wild English",
    "last_modified":"2015/01/05 18:59:30 +0000",
    "uri":"https://api.soundcloud.com/users/62017384",
    "avatar_url":"https://i1.sndcdn.com/avatars-000099348346-b7x6ad-large.jpg"},
    "permalink_url":"http://soundcloud.com/wildenglish/turn-it-on-mast",
    "artwork_url":"https://i1.sndcdn.com/artworks-000088130663-6vqwe3-large.jpg",
    "waveform_url":"https://w1.sndcdn.com/3qNlifV5SXOI_m.png",
    "stream_url":"https://api.soundcloud.com/tracks/163232447/stream",
    "playback_count":208,
    "download_count":0,
    "favoritings_count":2,
    "comment_count":0,
    "attachments_uri":"https://api.soundcloud.com/tracks/163232447/attachments",
    "policy":"ALLOW"
    },

{
"kind":"track",
"trackNum": 2,
"id":163232391,
"title":"No Way",
"original_format":"wav",
"license":"all-rights-reserved",
"uri":"https://api.soundcloud.com/tracks/163232391",
"user":{
    "id":62017384,"kind":"user","permalink":"wildenglish","username":"Wild English","last_modified":"2015/01/05 18:59:30 +0000","uri":"https://api.soundcloud.com/users/62017384","avatar_url":"https://i1.sndcdn.com/avatars-000099348346-b7x6ad-large.jpg"},"permalink_url":"http://soundcloud.com/wildenglish/no-way-mast","artwork_url":"https://i1.sndcdn.com/artworks-000088130709-to7s4z-large.jpg","waveform_url":"https://w1.sndcdn.com/u4xYpSKQtygP_m.png","stream_url":"https://api.soundcloud.com/tracks/163232391/stream","playback_count":153,"download_count":0,"favoritings_count":1,"comment_count":0,"attachments_uri":"https://api.soundcloud.com/tracks/163232391/attachments","policy":"ALLOW"},

{
"kind":"track",
"trackNum": 3,    
"id":163232342,
"title":"Giving Up",
"original_format":"wav","license":"all-rights-reserved",
"uri":"https://api.soundcloud.com/tracks/163232342",
"user":{
    "id":62017384,
    "kind":"user",
    "permalink":"wildenglish",
    "username":"Wild English",
    "last_modified":"2015/01/05 18:59:30 +0000",
    "uri":"https://api.soundcloud.com/users/62017384",
    "avatar_url":"https://i1.sndcdn.com/avatars-000099348346-b7x6ad-large.jpg"},
    "permalink_url":"http://soundcloud.com/wildenglish/giving-up",
    "artwork_url":"https://i1.sndcdn.com/artworks-000088130746-8gbicr-large.jpg",
    "waveform_url":"https://w1.sndcdn.com/zud7vkDr9IRj_m.png",
    "stream_url":"https://api.soundcloud.com/tracks/163232342/stream",
    "playback_count":102,
    "download_count":0,
    "favoritings_count":2,
    "comment_count":0,
    "attachments_uri":"https://api.soundcloud.com/tracks/163232342/attachments",
    "policy":"ALLOW"},
{
"kind":"track",
"trackNum": 4,
"id":163232237,
"title":"Keep Running",
"original_format":"wav","license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/163232237","user":{"id":62017384,"kind":"user","permalink":"wildenglish","username":"Wild English","last_modified":"2015/01/05 18:59:30 +0000","uri":"https://api.soundcloud.com/users/62017384","avatar_url":"https://i1.sndcdn.com/avatars-000099348346-b7x6ad-large.jpg"},"permalink_url":"http://soundcloud.com/wildenglish/keep-running-mast-81414","artwork_url":"https://i1.sndcdn.com/artworks-000088130909-pw249i-large.jpg","waveform_url":"https://w1.sndcdn.com/ENjJRodDa9KL_m.png","stream_url":"https://api.soundcloud.com/tracks/163232237/stream","playback_count":79,"download_count":0,"favoritings_count":1,"comment_count":0,"attachments_uri":"https://api.soundcloud.com/tracks/163232237/attachments","policy":"ALLOW"}] 
    
  this.trackNumber = 1
  this.indexTrack = 0
  console.log(this.indexTrack)
  this.indexPlus = function(){
      console.log(this.indexTrack)
      if(this.indexTrack < 4){
          this.indexTrack = this.indexTrack + 1
      }
      if (this.indexTrack == 4){
          return this.indexTrack = 0
      } 
  }
  this.nextTrack = function(){
      if(this.trackList[this.indexTrack].trackNum < 4){
          return this.indexTrack = this.indexTrack + 1, this.trackNumber = this.trackNumber + 1
      }
      else {
          return this.trackNumber = 1
      } 
  }
  
  console.log(this.trackNumber)
  console.log(this.trackList[this.indexTrack].trackNum)

  });
