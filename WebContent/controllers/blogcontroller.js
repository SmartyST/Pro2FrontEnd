/**
 * 
 */
app.controller('BlogCtrl',function($scope,$location,$rootScope,BlogService){
	$scope.addBlog=function(blog){
		BlogService.addBlog(blog).then(
			function(response){
				alert('Blog is added sucessfully and it is waiting for approval');
				$location.path('/home')
			},
			function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
		}
})