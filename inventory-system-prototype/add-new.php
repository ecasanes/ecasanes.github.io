<?php include('header.php'); ?>

	<div class="row">
		<div class="col-sm-8">
			<div class="boxed">

				<table class="form">
					<thead>
						<tr>
							<th colspan="2">Add a Product</th>
						</tr>
						
					</thead>
					<tbody>
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
								<select name="category" class="select_styled">
									<option value="">Option 1</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>Subcategory</td>
							<td>
								<select name="subcategory" class="select_styled">
									<option value="">Option 1</option>
								</select>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<input class="" type="submit" value="Add Now" />
							</td>
						</tr>
					</tbody>
				</table>

			</div>
		</div>

		<div class="col-sm-4">
			<?php include('widget-2.php'); ?>
		</div>
	</div>


<?php include('footer.php'); ?>