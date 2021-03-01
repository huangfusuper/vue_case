const vue = new Vue({
	el : '#app',
	data:{
		books:[
			{
				id:1,
				name:"java并发编程的艺术",
				data:"2020-01-10",
				price:100.00,
				count:1
				
			},{
				id:2,
				name:"微服务架构设计模式",
				data:"2020-06-10",
				price:200.00,
				count:1
			},{
				id:3,
				name:"Java编程思想",
				data:"2021-05-29",
				price:55.00,
				count:4
			},{
				id:4,
				name:"山海经",
				data:"2019-05-29",
				price:77,
				count:3
			}
		]
	},
	methods:{
		add(book){
			book.count++
		},
		sub(book){
			book.count--
		},
		removeHandler(index){
			this.books.splice(index,1)
		}
	},
	computed:{
		totleCount(){
			return this.books.map(book => book.price * book.count).reduce((pre,thisValue) =>{
				return pre + thisValue
			},0)
			
		}
	},
	filters:{
		showPrice(price){
			return '￥' + price.toFixed(2);
		}
	}
});