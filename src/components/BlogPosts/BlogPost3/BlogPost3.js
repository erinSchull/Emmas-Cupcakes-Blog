//this is just so my code doesn't break
//come back and make this part of the conditional render in blog previews after presentation

import React, { Component } from 'react';
import winterFormal from './../../../images/winter-formal.jpg';
import cupcake from './../../../images/cupcake.jpg';

// import './BlogPost3.css';

class BlogPost3 extends Component {
    render() {
        return (
            <div className='blog3' >
                <div className='blog3-intro' >
                    <img src={cupcake} className='cupcake-title' alt='yellow cupcake' />
                    <h2>Killer Cupcakes</h2>
                </div>
                <div className-='blog3-body'>
                <p>So for a long time many people who know me have said that I have "Killer Cupcakes". (Don't worry, they aren't called that because they kill people <span role="img">😆</span>)
                    I have decided to put out my favorite cupcake recipe. It is a white cake with cream cheese frosting and a raspberry marshmallow filling. That may sound kind of hard but believe me it is not. Just so long as you have the correct measuring cups and things it isn't really that hard! (i think its lots of fun! 😉)
                    Just so you all know I did not make this recipe up. I got it from one of my mum's Betty Crocker's Cookbook. (If there is some copyright issues with this post let me know.)
                    Also, the picture on top is not mine but the one below is. (the picture below is a chocolate cake because I don't have any pictures with the white cake <span role="img">😳</span> but it is still looks quite similar)
                </p>
                <img className='silver-cupcake' src={winterFormal} alt='wintry cupcake' />
                <p>Silver White Cake <br />
                    2 1/4 cups all-purpose flour (do not use self rising flour) <br />
                    1 2/3 cups sugar <br />
                    2/3 cups shortening <br />
                    1 1/4 cups milk <br />
                    3 1/2 teaspoons baking powder <br />
                    1 teaspoon salt <br />
                    1 teaspoon vanilla <br />
                    5 egg whites</p>

                <p>Heat oven to 350 degrees. Line 24 medium cupcake cups with paper baking cups. Beat all ingredients except egg whites on low speed, scraping bowl constantly, 30 seconds. Beat on high speed, scraping bowl occasionally, 2 minutes. Beat in egg whites on high speed, scraping bowl occasionally, 2 minutes. Pour into cupcake liners. (I use a 1/4 cup measure cookie scoop to get everything all even)
                Bake until wooden pick (or toothpick) inserted into center comes out clean. 20 to 25 minutes.
                (note: if you want to make this as a cake use a 13x9x2 inches rectangle and bake for 40 to 45 minutes)
                <br />
                    So this is this is the cake i use. I use a cream cheese frosting. recipe below:
                </p>
                <p>
                    Cream Cheese Frosting <br/>
                    1 package (8 oz) cream cheese, softened <br/>
                    1 tablespoon milk <br/>
                    1 teaspoon vanilla <br/>
                    4 cups powdered sugar <br/>
                </p>
                <p>
                Beat cream cheese milk and vanilla together on low speed until smooth. Gradually beat in powdered sugar, 1 cup at a time, until smooth and spreadable. 
                Frosts about 30 cupcakes.
                <br/>
                For filling I like to use raspberry marshmallow cream. To make it mix a spoonful or two of raspberry jam (or jelly) with a 7 oz container of marshmallow cream. its really simple.
                Really any type of jelly or jam can be mixed with marshmallow cream. Or you could not add jam and just have marshmallow cream filling.
                </p>
                <p>
                Directions:
                If your freezer is large enough I recommend placing the unfrosted/unfilled cakes in the freezer for an hour or so. (If your freezer isn't big enough then it isn't recommended to try and fill the cakes.)
                While they are cooling in the freezer mix up the frosting and filling and put in pastry bags or Ziploc bags.
                After an hour or so pull the cakes out of the freezer and core them. If you don't have a cupcake corer then you can use a little spoon. (I use a 1/4 sized teaspoon to hollow them out) You just have to use common sense to see how deep you need to core the cake.
                Once you have all the cakes cored (or how ever many you want) snip the tip off the pastry bag (or the corner of the Ziploc bag) that has the filling and fill the cakes.
                Last is to frost the cakes. Just snip the tip off the pastry bag (or the corner of the Ziploc bag) and frost the cupcakes.
                Simple!
                </p>
                <p>
                I hope you like these cupcakes as much as I like them! They make great birthday cupcakes and great for new neighbor gifts! <br/>
                Enjoy! <br/>
                <br/>
                TTYL! <br/>
                <br/>
                Emma ❤️

                </p>
                </div>
                <a href='/#/previews' >
                <button>Back To Previews</button>
                </a>
            </div>
        )
    }
}

export default BlogPost3;