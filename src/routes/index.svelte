<!DOCTYPE html />
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
			rel="stylesheet"
		/>

		<link rel="stylesheet" href="./../app.css" />

		<title>Comoki</title>
	</head>
	<body class="font-Courier">
		<div class="flex flex-col bg-indigo-100">
			<div>
				<nav class="bg-indigo-100 w-full h-14 hidden lg:flex p-4 justify-between fixed z-40">
					<div class="h-auto w-auto">
						<a href="./index.svelte" class="text-3xl font-bold">
							Fitness<span class="text-blue-500">.</span>
						</a>
					</div>
					<div class="flex space-x-8">
						<a href="index.svelte" class="text-md font-normal underline decoration-blue-500">
							Home
						</a>
						<a href="./index.svelte" class="text-md font-normal text-gray-400"> Eat </a>
						<a href="./index.svelte" class="text-md font-normal text-gray-400"> Diet </a>
						<a href="./index.svelte" class="text-md font-normal text-gray-400"> Friends </a>
						<a href="./index.svelte" class="text-md font-normal text-gray-400"> About </a>
					</div>
					<div class="flex space-x-4">
						<button class="bg-blue-500 text-white  px-4 rounded-md"> Login </button>
						<button class="bg-blue-500 text-white  px-4 rounded-md"> Sign Up </button>
					</div>
				</nav>
			</div>

			<section class="w-full h-screen">
				<div
					class="w-full h-full flex flex-col absolute space-y-96 py-4 items-center pl-10 lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start"
				>
					<input
						type="search"
						placeholder="Search"
						class="outline-none p-3 rounded-md shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden"
					/>
					<div class="hidden h-auto lg:w-2/4 lg:flex lg:pb-6">
						<p class="text-4xl ml-6 font-bold text-shadow-md">
							CONTROL WHAT YOU EAT AND SHARE WITH YOUR FRIENDS! 🙋‍♂️
						</p>
					</div>
					<div class="flex space-x-10 pt-10">
						<button
							class="w-52 h-10 rounded-md text-lg text-white font-semibold  bg-blue-500 transition transition-all duration-500 ease-in-out hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16 dark:text-black dark:hover:bg-black dark:hover:text-white"
						>
							Explore
						</button>
						<button
							class="w-52 h-10 rounded-md text-lg text-black font-semibold  bg-none border-2 border-blue-500 texttransition transition-all duration-500 ease-in-out hover:text-black transform hover:-translate-y-1 hover:scale-110 lg:ml-16 dark:text-black dark:hover:bg-black dark:hover:text-white"
						>
							Explore
						</button>
					</div>
				</div>
				<div class="w-full h-3/4">
					<div class="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
						<img class="lg:hidden" src="" alt="San Francisco" />
					</div>
				</div>
			</section>
		</div>
	</body>
</html>
