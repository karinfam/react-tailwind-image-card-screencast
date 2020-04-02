import React from 'react';

export function PropertyCard(props) {
	let property = props.property;
	let stars = [ 1, 2, 3, 4, 5 ];
	return (
		<div>
			<div class="relative pb-5/6">
				<img
					class="absolute h-full w-full object-cover rounded-lg shadow-md"
					src={property.imageUrl}
					alt={property.imageAlt}
				/>
			</div>
			<div class="relative px-4 -mt-16">
				<div class=" bg-white p-6 rounded-lg shadow-lg">
					<div class="flex items-baseline">
						<span class="inline-block text-xs bg-teal-200 text-teal-800 px-2 rounded-full uppercase font-semibold tracking-wide">
							New
						</span>
						<div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
							{property.beds} beds &bull; {property.baths} baths
						</div>
					</div>
					<h4 class="font-semibold text-lg leading-tight truncate mt-1">{property.title}</h4>
					<div class="mt-1">
						{property.formattedPrice} <span class="text-gray-600 text-sm">/ wk</span>
					</div>
					<div class="mt-2 flex items-center">
						{stars.map((value, index) => (
							<svg
								class={
									index < property.rating ? (
										'text-teal-500 h-4 w-4 fill-current'
									) : (
										'text-gray-400 h-4 w-4 fill-current'
									)
								}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z" />
							</svg>
						))}
						<span class="text-gray-600 text-sm ml-2">{property.reviewCount} reviews</span>
					</div>
				</div>
			</div>
		</div>
	);
}

// function getStarColor() {
// 	return i < rating ? 'text-teal-400' : 'text-gray-500';
// }
