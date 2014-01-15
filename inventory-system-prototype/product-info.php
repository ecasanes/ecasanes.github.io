<?php include('header.php'); ?>

	<div class="row">
		<div class="col-sm-8">

			<div class="row">
				<div class="col-sm-12">
					<div class="boxed">

						<table class="form product-info">
							<thead>
								<tr>
									<th colspan="2">Product Information</th>
								</tr>
								
							</thead>
							<tbody>
								<form>
								<tr>
									<td>Product Name</td>
									<td>
										<input type="text" value="" name="product_name" />
									</td>
								</tr>
								<tr>
									<td>Price</td>
									<td>
										<input type="text" value="" name="price" />
									</td>
								</tr>
								<tr>
									<td>Stocks</td>
									<td>
										<input type="text" value="" name="stocks" />
									</td>
								</tr>
								<tr>
									<td>Category</td>
									<td>
										<input type="text" value="" name="stocks" />
									</td>
								</tr>
								<tr>
									<td>Subcategory</td>
									<td>
										<input type="text" value="" name="stocks" />
									</td>
								</tr>
							</tbody>
							</form>
						</table>

						


					</div> <!-- /boxed -->
				</div> <!-- /col-sm-12 -->
			</div><!-- /row -->

			<div class="row">
				<div class="col-sm-8">
					<a href="#" class="btn btn-green"><span>Edit Product</span></a>
					<a href="#" class="btn"><span>New Category</span></a>
					<a href="#" class="btn"><span>New Subcategory</span></a>
				</div>

				<div class="col-sm-4">
					<a href="#" class="btn btn-blue place-right"><span><strong>+</strong> Stock</span></a>
					<a href="#" class="btn btn-red place-right"><span><strong>--</strong> Stock</span></a>
				</div>

			</div>
			
		</div>

		<div class="col-sm-4">
			<?php include('widget-3.php'); ?>
		</div>
	</div><!-- /row -->







<?php include('footer.php'); ?>