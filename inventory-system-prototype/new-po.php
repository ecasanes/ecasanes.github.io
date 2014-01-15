<?php include('header.php'); ?>



            <div class="row">
                <div class="col-sm-12">
                    
                    <form>
                    <div class="select-container boxed-turquoise">
                        <label>Category</label>
                        <select class="select" name="category_selector">
                            <option value="">Category 1</option>
                            <option value="">Category 2</option>
                            <option value="">Category 3</option>
                        </select>
                    </div>

                    <div class="select-container boxed-turquoise">
                        <label>Product Name</label>
                        <input class="basic-search" type="text" name="product_name"  />
                    </div>
                    </form>


                    <div id="add-new-product" class="place-right">
                        <a class="btn bold" href="sales-report.php"><span class="yellow">View Sales Report</span></a>
                    </div>

                    <table class="boxed boxed-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Stocks</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td class="number">111</td>
                                <td>Product 1</td>
                                <td class="number">
                                    3
                                </td>
                                <td class="price"><span>1,999.99 PHP<span></td>
                                <td class="options align-center">
                                    <a class="btn btn-red btn-icon-right btn-arrow-right align-center" href="po.php"><span>Purchase</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="number">222</td>
                                <td>Product 2</td>
                                <td class="number">2</td>
                                <td class="price"><span>199.99 PHP<span></td>
                                <td class="options align-center">
                                    <a class="btn btn-red btn-icon-right btn-arrow-right align-center" href="po.php"><span>Purchase</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="number">333</td>
                                <td>Product 3</td>
                                <td class="number">10</td>
                                <td class="price"><span>19.99 PHP<span></td>
                                <td class="options align-center">
                                    <a class="btn btn-red btn-icon-right btn-arrow-right align-center" href="po.php"><span>Purchase</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="number">444</td>
                                <td>Product 4</td>
                                <td class="number">0</td>
                                <td class="price"><span>1,99.99 PHP<span></td>
                                <td class="options align-center">
                                    <a class="btn btn-red btn-icon-right btn-arrow-right align-center" href="po.php"><span>Purchase</span></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- tf pagination -->
                            <div class="tf_pagination style3">
                                <div class="inner">
                                    <a class="page_prev" href="#"><span>&lsaquo;</span></a>

                                    <span class="page-numbers page_current">1</span>
                                    <a href="#" class="page-numbers">2</a>
                                    <a href="#" class="page-numbers">3</a>

                                    <a class="page_next" href="#"><span>&rsaquo;</span></a>
                                </div>
                            </div>
                            <!--/ tf pagination -->
                </div>
            </div>

<?php include('footer.php'); ?>