<?php include('header.php'); ?>



            <!-- row -->
            <div class="row">
                <div class="col-sm-6">
                    <!-- Image Slider -->
                    <div class="widget-container widget-gallery boxed">
                        <div class="inner">
                            <div id="myCarousel" class="carousel slide" data-interval="5000">
                                <!-- Carousel items -->
                                <div class="carousel-inner">
                                    <div class="active item"><a href="images/temp/post_img7.jpg" class="prettyPhoto" data-rel="prettyPhoto" title="Post Image"><img src="images/temp/post_img7.jpg" alt="" /></a></div>
                                    <div class="item"><a href="images/temp/post_img1.jpg" class="prettyPhoto" data-rel="prettyPhoto" title="Post Image"><img src="images/temp/post_img1.jpg" alt="" /></a></div>
                                    <div class="item"><a href="images/temp/post_img2.jpg" class="prettyPhoto" data-rel="prettyPhoto" title="Post Image"><img src="images/temp/post_img2.jpg" alt="" /></a></div>
                                    <div class="item"><a href="images/temp/post_img4.jpg" class="prettyPhoto" data-rel="prettyPhoto" title="Post Image"><img src="images/temp/post_img4.jpg" alt="" /></a></div>
                                    <div class="item"><a href="images/temp/post_img6.jpg" class="prettyPhoto" data-rel="prettyPhoto" title="Post Image"><img src="images/temp/post_img6.jpg" alt="" /></a></div>
                                </div>
                                <div class="carousel-controls">
                                    <!-- Carousel indicators -->
                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                        <li data-target="#myCarousel" data-slide-to="3"></li>
                                        <li data-target="#myCarousel" data-slide-to="4"></li>
                                    </ol>
                                    <!-- Carousel nav -->
                                    <a class="carousel-control left" href="#myCarousel" data-slide="prev"></a>
                                    <a class="carousel-control right" href="#myCarousel" data-slide="next"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/ Image Slider -->
                </div>

                <div class="col-sm-6">
                    <?php include('widget-2.php'); ?>
                </div>

                
            </div>
            <!--/ row -->


            

<?php include('footer.php'); ?>