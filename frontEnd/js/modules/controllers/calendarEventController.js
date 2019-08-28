app.controller('calendarEventController', ['$scope', '$filter', function($scope, $filter) {
  
    $scope.daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
          $scope.daysOfWeekLarge = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
          $scope.hoursOfDay = [];
          for(var i = 0; i <= 24; i++) $scope.hoursOfDay.push(i);
  
          $scope.eventsScheme = [
              { TimeStamp: "10845", Type: "Off"},
              { TimeStamp: "31000", Type: "On"},
              { TimeStamp: "40500", Type: "Off"},
              { TimeStamp: "41000", Type: "On"},
              { TimeStamp: "41900", Type: "On"},
              { TimeStamp: "50700", Type: "Off"},
              { TimeStamp: "60800", Type: "On"}
          ];
  
          $scope.getDayEvents = function(index){
  
              var filteredByDay = [];
  
              var lastEvent = $scope.getPreviousDayLastEvent(index);
              if(lastEvent !== false){
                  if(+$scope.getEventDay(lastEvent) !== index) filteredByDay.push(lastEvent);
                  else {
                      //  var newLast = angular.copy(lastEvent);
                      //  newLast.Type = 'On';
                      //  filteredByDay.push(newLast);
                  };
              }
  
              for(var i in $scope.eventsScheme)
              if(+$scope.getEventDay($scope.eventsScheme[i]) === index)
              filteredByDay.push($scope.eventsScheme[i]);
  
              return filteredByDay;
  
          };
  
          $scope.getPreviousDayLastEvent = function(index){
  
              if($scope.eventsScheme.length !== 0){
  
                  var dayLastEvent = false;
  
                  for(var i in $scope.eventsScheme)
                  if(+$scope.getEventDay($scope.eventsScheme[i]) < index)
                  dayLastEvent = $scope.eventsScheme[i];
  
                  if(dayLastEvent) return dayLastEvent;
                  else return $scope.eventsScheme[i];
  
              } else return false;
          };
  
          $scope.haveDayEvents = function(index){
              for(var i in $scope.eventsScheme){
                  if(+$scope.getEventDay($scope.eventsScheme[i]) === index) {
                      return true; break;
                  }
              } return false;
          };
  
          $scope.getPreviousEvent = function(item){
              var index = $scope.eventsScheme.indexOf(item);
              if(index !== -1){
                  index = index - 1;
                  if(index < 0) index = $scope.eventsScheme.length - 1;
                  return $scope.eventsScheme[index];
              } return false;
          };
  
          $scope.getNextEvent = function(item){
              var index = $scope.eventsScheme.indexOf(item);
              if(index !== -1){
                  index = index + 1;
                  if(index > ($scope.eventsScheme.length -1)) index = 0;
                  return $scope.eventsScheme[index];
              } return false;
          };
  
          $scope.getEventDay = function(item){
              if(typeof item !== 'undefined')
              return item.TimeStamp.substr(0, 1);
              return false;
          };
  
          $scope.getEventDayText = function(item){
              return $scope.daysOfWeekLarge[+$scope.getEventDay(item)];
          };
  
          $scope.getEventStart = function(item){
              if(typeof item !== 'undefined')
              return item.TimeStamp.substr(1, 2) + ':' + item.TimeStamp.substr(3, 2);
              return false;
          };
  
          $scope.eventFromToday = function(item, day){
              return ($scope.getEventDay(item) == $scope.daysOfWeek.indexOf(day));
          };
  
          $scope.eventEndTheSameDay = function(item){
              return ($scope.getEventDay(item) == $scope.getEventDay($scope.getNextEvent(item)));
          };
  
          $scope.getEventPosition = function(item, day){
              if(typeof day !== 'undefined')
              if(+$scope.getEventDay(item) === $scope.daysOfWeek.indexOf(day)){
                  var minutes = (+item.TimeStamp.substr(1, 2) * 60) + +item.TimeStamp.substr(3, 2);
                  return ((100 / (24 * 60)) * minutes);
              } else return 0;
          };
  
          $scope.getEventHeight = function(item, day){
  
              var nextEvent = $scope.getNextEvent(item);
  
              if(nextEvent !== false){
                  if(!$scope.haveDayEvents($scope.daysOfWeek.indexOf(day))) return 0;
                  else if(+$scope.getEventDay(item) !== $scope.daysOfWeek.indexOf(day)) return (100 -$scope.getEventPosition(nextEvent, day));
                  else if($scope.getEventDay(item) !== $scope.getEventDay(nextEvent)) return 0;
                  else return (100 -$scope.getEventPosition(nextEvent, day));
  
              } else return 0;
  
          };
  
          $scope.getEventColor = function(event){
              switch(event.Type){
                  case 'On': return '#ace670'; break;
                  case 'Off': return '#fc7f80'; break;
                  default: return 'white';
              };
          };
  
  
  
  
  
          $scope.hoveredEvent = false;
          $scope.currentEvent = false;
  
          $scope.mouseHoverEvent = function(item){
              $scope.hoveredEvent = item;
          };
  
          $scope.mouseLeaveEvent = function(item){
              $scope.hoveredEvent = false;
          };
  
          $scope.selectEvent = function(item){
              if($scope.currentEvent !== item){
                  item.start = $scope.getEventStart(item);
                  $scope.currentEvent = item;
              } else $scope.currentEvent = false;
          };
    
      $scope.unselectEvent = function(){
              $scope.currentEvent = false;
          };
  
          $scope.newEvent = function(){
              if(typeof $scope.currentEvent.repeat !== 'undefined') $scope.currentEvent = false;
              else $scope.currentEvent = {
                  Type: 'On',
                  start: '13:00',
                  repeat: [0]
              };
          };
  
          $scope.toggleType = function(){
              if($scope.currentEvent.Type === 'On') $scope.currentEvent.Type = 'Off';
              else $scope.currentEvent.Type = 'On';
          };
  
          $scope.changeStart = function(){
              if(typeof $scope.currentEvent.TimeStamp !== 'undefined')
              $scope.currentEvent.TimeStamp = $scope.currentEvent.TimeStamp[0] + $scope.currentEvent.start.replace(':', '');
          };
  
          $scope.isRepeatDaySelected = function(i){
              return ($scope.currentEvent.repeat.indexOf(i) !== -1);
          };
  
          $scope.selectRepeatDay = function(i){
              if($scope.isRepeatDaySelected(i)) $scope.currentEvent.repeat.splice($scope.currentEvent.repeat.indexOf(i), 1);
              else $scope.currentEvent.repeat.push(i);
          };
  
          $scope.createEvent = function(){
  
              var timestamp = '';
  
              for(var i in $scope.currentEvent.repeat){
                  timestamp = $scope.currentEvent.repeat[i] + $scope.currentEvent.start.replace(':', '');
                  $scope.eventsScheme.push({ TimeStamp: timestamp, Type: $scope.currentEvent.Type});
              };
  
              $scope.refreshEvents();
              $scope.currentEvent = false;
  
          };
  
          $scope.removeCurrentEvent = function(){
              $scope.removeEvent($scope.currentEvent);
              $scope.currentEvent = false;
          };
  
          $scope.removeEvent = function(item){
              $scope.eventsScheme.splice($scope.eventsScheme.indexOf(item), 1);
              $scope.refreshEvents();
          };
  
          $scope.refreshEvents = function(){
              $scope.eventsScheme = $filter('orderBy')( $scope.eventsScheme, 'TimeStamp', false);
          };
    
  }]);