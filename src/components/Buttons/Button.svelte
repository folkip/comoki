<script lang="ts">
	export let service: string, svg: string, extras: string;
</script>

<div class="flex flex-wrap mb-3 -mx-3 p-10">
	<div class="w-full px-3">
		<button class={`p-3 rounded relative flex items-center w-full px-0 text-white ${extras}`}>
			<svg
				class="flex-shrink-0 w-4 h-4 mx-4 text-white opacity-75 fill-current"
				viewBox="0 0 16 16"
			>
				<path d={svg} />
			</svg>
			<span class="flex-auto pl-16 pr-8 -ml-16">{service}</span>
		</button>
	</div>
</div>
