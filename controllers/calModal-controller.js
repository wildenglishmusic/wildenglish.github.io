'use strict';

angular.module('wildEnglish')

   .controller('ModalCtrl', function(Restangular, uiCalendarConfig, calendarEvents, $scope){
    var date = new Date(),
        d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
    
    $scope.calEvents = calendarEvents;
    
    
    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "https://www.google.com/calendar/feeds/5hdm5prrvpkfl6h749ptci39eg%40group.calendar.google.com/public/basic",
            className: 'gcal-event',
            googleCalendarApiKey: 'AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU',
    };
        
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];
        
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
    
   
    /* config object */
    $scope.uiConfig = {
      calendar:{
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        }
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.eventSource];
    
//    $scope.events, $scope.eventSource, $scope.eventsF
});