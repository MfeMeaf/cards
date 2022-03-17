$(document).ready(function(){

$.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction?api-key=yYmlydQcIYVkLB2oYED0Zwf8EK8evVLZ", function(data){
    var title1 = ('<h2>best sellers - Hardcover Fiction</h2>')
        $("body").append(title1);
        data.results.books.forEach(i => {
            console.log(i);
            var img = `<img style='padding:5px' class='card-img-top' src=${i.book_image} alt='card image cap'; style='width:25vh'>`
            var title2 = `<h5 class="card-title">${i.title}</h5>`
            var author = `<p>Author: ${i.author}</p>`
            var rank = `<p>Rank: ${i.rank}</p>`
            var description = `<p class="card-text">${i.description}</p>`
            var product = `<a href=${i.amazon_product_url} target="_blank" class="btn btn-primary">go buy book</a>`
            // $.get(`https://booksrun.com/api/v3/price/buy/${i.primary_isbn13}?key=fzr2u92h2pg4dvl3p2xk`, function(priceCheck){
            //     if(priceCheck.result.offers.booksrun.new === "none"){
            //         var price = `<p>Price: Undefined</p>`
            //     }else{
            //         var price = `<p>Price: ${priceCheck.result.offers.booksrun.new.price}</p>`
            //     }
                var books = (`<div style="width:255px;height:75vh; float:left; margin:10px; background: linear-gradient(to left, #ce6efb, #800080);" class="card" style="width: 18rem;"><div class="card-body">${img+title2+author+rank+description+product}</div></div>`)
                $("body").append(books);
                console.log(i);
            
        });
        while(true){
            $.get(`https://booksrun.com/api/v3/price/buy/${i.primary_isbn13}?key=fzr2u92h2pg4dvl3p2xk`, function(priceCheck){
            if(priceCheck.result.offers.booksrun.new === "none"){
                 var price = `<p>Price: Undefined</p>`
             }else{
                 var price = `<p>Price: ${priceCheck.result.offers.booksrun.new.price}</p>`
            }
        }
    });
});