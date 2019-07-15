$("#login").click(function(){
	fetch()
	fetch('https://jsonplaceholder.typicode.com/users?username=' + 
		$("#username").val())
	.then(function(response){
		return response.json();
	})
	.then(function(json){
		var user=json[0];

	$("#login-form").hide();
	$("#homepage").show();

	$("#name").html(user.name);

	fetch('http://jsonplaceholder.typicode.com/posts' + 
		$("#posts").val())
	$("#posts").show();

	.then(function(results){ //serial
		var users = results[];
		var posts = results[];
		var albums = results[];

	return Promise.All([users, posts, albums]); 
})



	})
	.catch(function(error){
		alert(error);
	})
})