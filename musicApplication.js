     

// Get JSON from link and make it var obj

        $.getJSON('https://s3.us-west-1.amazonaws.com/coding-exercise/songs', function(obj) {
   



        
    
$(function() {
    $('.dd a').click(function() {
        
        // switch the order
        var id = $(this).attr('id');
        var asc = (!$(this).attr('asc')); 
        
      
        $('.dd a').each(function() {
            $(this).removeAttr('asc');
        });
        if (asc) $(this).attr('asc', 'asc');
        
        sortResults(id, asc);
    });
        
    showResults();
});

            
            // sort results from lowest to highest
function sortResults(prop, asc) {
    obj = obj.sort(function(a, b) {
        if (asc) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0;
        }
      
    
    });
    showResults();
}

            
    //Show results in 4 different columns
            
function showResults () {
    var html = '';
    var html1 = '';
    var html2 = '';
    var html3 = '';
   
    for (var e = 0; e < 7; e++) {
        
     
        var min = Math.floor(obj[e].length / 60);
        var sec = obj[e].length - (min * 60);
        var secon = (sec < 10 ? '0'+sec : sec);
        
        
        html += '<tr>'+
            '<td>'+obj[e].name+'</td>'
            +'<td>'+min+':'+secon+'</td>'
            +'<td>'+obj[e].year+'</td>'+'</tr>'
    ;
    }
    $('#results').html(html);
    
     for (var e = 7; e < 14; e++) {
        
     
        var min = Math.floor(obj[e].length / 60);
        var sec = obj[e].length - (min * 60);
        var secon = (sec < 10 ? '0'+sec : sec);
        
        
        html1 += '<tr>'+
            '<td>'+obj[e].name+'</td>'
            +'<td>'+min+':'+secon+'</td>'
            +'<td>'+obj[e].year+'</td>'+'</tr>'
    ;
    }
    $('#results1').html(html1);
    
     for (var e = 14; e < 21; e++) {
        
     
        var min = Math.floor(obj[e].length / 60);
        var sec = obj[e].length - (min * 60);
        var secon = (sec < 10 ? '0'+sec : sec);
        
        
        html2 += '<tr>'+
            '<td>'+obj[e].name+'</td>'
            +'<td>'+min+':'+secon+'</td>'
            +'<td>'+obj[e].year+'</td>'+'</tr>'
    ;
    }
    $('#results2').html(html2);
    
      for (var e = 21; e < 27; e++) {
        
     
        var min = Math.floor(obj[e].length / 60);
        var sec = obj[e].length - (min * 60);
        var secon = (sec < 10 ? '0'+sec : sec);
        
        
        html3 += '<tr>'+
            '<td>'+obj[e].name+'</td>'
            +'<td>'+min+':'+secon+'</td>'
            +'<td>'+obj[e].year+'</td>'+'</tr>'
    ;
    }
    $('#results3').html(html3);
    
}

 }); 