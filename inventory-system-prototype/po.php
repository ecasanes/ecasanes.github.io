<?php include('header.php'); ?>

	<div class="row">
		<div class="col-sm-8">
			<div class="boxed">

				<table class="form purchase-order">
					<thead>
						<tr>
							<th colspan="2">New Purchase Order</th>
						</tr>
						
					</thead>
					<tbody>
						<tr>
							<td>Product Name</td>
							<td>
								<input class="disabled" type="text" value="Product 1" name="product_name" disabled />
							</td>
						</tr>
						<tr>
							<td>Price</td>
							<td>
								<input class="disabled" type="text" value="199.99 PHP" name="product_name" disabled />
							</td>
						</tr>
						<tr>
							<td>Stocks Available</td>
							<td>
								<input class="disabled" type="text" value="33" name="product_name" disabled />
							</td>
						</tr>
						<tr>
							<td>Stocks to Purchase</td>
							<td>
								<input type="text" value="" name="product_name" />
							</td>
						</tr>
						<tr>
							<td>Final Price</td>
							<td>
								<input type="text" value="199.99 admin only" name="product_name" />
							</td>
						</tr>
						<tr>
							<td>Bill Paid</td>
							<td>
								<input type="text" value="500.00" name="product_name" />
							</td>
						</tr>
						<tr>
							<td>Remarks</td>
							<td>
								<textarea name="" id="" cols="30" rows="10"></textarea>
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