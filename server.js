const express = require('express');
const app = express();
const videos = 
		[
		 	{id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    		{id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    		{id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
		];

const comedians = [

	{id:1, title:'this man'}, 
	{id:2, title:'this woman'},
	{id:3, title:'this dog'},
	{id:4, title:'this cat'}
	];

const guitars = 
[
	{id:1, make: 'Fender', Model:"Telecaster"},
	{id:2, make: 'Fender', Model:"Stratocaster"},
	{id:3, make: 'Gibson', Model:"Les Paul"},
	{id:4, make: 'Gibson', Model:"SG"}
]

// app.get('/comedians', (req, res)=>{
// 	res.send(comedians);
// })
app.get('/videos/:id', (req, res)=>{
	// let videosJSON = JSON.stringify(videos);
	const Vid = videos.filter((item)=>{
		if(item.id == req.params.id){
			return item	
		}
	})
	res.send(Vid[0].id);
})

app.get('/comedians/:id', (req, res)=>{
	const comedianFilter = comedians.filter((element)=>
	{
		if(element.id == req.params.id){
			return element;
		}
	});
	res.send(comedianFilter);
});

app.get('/guitars', (req, res)=>{
	res.send(guitars);
})

app.get('/guitars/:which', (req, res) => {
	 const chosenGuitar = guitars.filter((item)=>{
	 	if(item.id == req.params.which){
	 		return item;
	 	}
	})
	res.send(chosenGuitar);
})


app.get('/comedians/:id/videos', (req, res)=>{
	res.send("specific comedians videos");
})
app.get('/comedians/:id/videos/:id', (req, res)=>{
	res.send("specific comedians specific video");
})

app.listen(3000, ()=>{
	console.log('server is running...')
})


