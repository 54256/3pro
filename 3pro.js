app=new Vue({
    el: "#app",

    data:{
	col: "cyan",
	conf:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
	labelBoxX:[0,1,2,3,4],
	labelBoxY:[0,1,2,3,4],
	ans:[[0,1,0,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],
	msg:"できた",
	msg1:"クリア!",
	msg2:"残念!"
    },
    
    
    computed:{
	horizontalsum:function(){
	    let sums=[];	    
	    for(let i in this.ans){
		sums.push([]);
		let length =0;
		for(let d of this.ans[i]){
		    if(d == 1){
			length++;
		    }else if(length>0){
			sums[i].push(length);
			length=0;
		    }
		}
		if(length>0){
		    sums[i].push(length);
		}
	    }
	    return sums;
	},

	verticalsum:function(){
	    let sums=[];	    
	    for(let j in this.ans[0]){
		sums.push([]);
		let length =0;
		for(let i in this.ans ){
		    if(this.ans[i][j] == 1){
			length++;
		    }else if(length>0){
			sums[j].push(length);
			length=0;
		    }
		}
		if(length>0){
		    sums[j].push(length);
		}
	    }
	    return sums;
	},

    },

    methods:{
	trans: function(x){
	    return "translate("+(50*x+220)+",120)";
	},
	transY: function(y){
	    return "translate(130,"+(50*y+230)+")";
	},
	
	toggle: function(i,j){
	    if(this.conf[i][j]==0){
		this.conf[i].splice(j,1,1);
	    }else{
		this.conf[i].splice(j,1,0);	
	    }
	},

	change: function(i,j){
	    this.toggle(i,j);
	    
	},
	message: function(){
	    if(JSON.stringify(this.conf)==JSON.stringify(this.ans)){
		alert(this.msg1);
	    }else{
		alert(this.msg2);
	    }
	}
    }
    
})
/*<img id="img" src="hearts.png">
  <canvas id="canvas"></canvas>
*/
