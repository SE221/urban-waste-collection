# **URBAN WASTE COLLECTION (UWC) 2.0**

## Goal
The project is to deliver an upgraded version of UWC 1.0 with more features, friendly UI and scalability:
- [x] Provide BO tools for resource management and route optimization
- [ ] Provide Collectors and Janitors tools (on mobile) for managing their profiles, work calendar, daily tasks, vehicles and routes (Collectors only)
## Technology
- For the techstack, we used the MERN Stack to have more consistency when processing requests between Frontend and Backend, also having the ability to scale and free hosting with MongoDB.
- To sketch the diagram and draw wireframe, we used [draw.io](https://www.draw.io) (support UML 2.5) and AI-powered platform [Visily](https://www.visily.ai), respectively.

## Run locally
### Clone the repository
```{bash}
git clone https://github.com/SE221/urban-waste-collection.git
```
### Install the requirements
In this step, you need to install separate packages for Front-end and Back-end
- For Front-end:
```{bash}
cd FE
npm install
```

- For Back-end:
```{bash}
cd BE
npm install
```
*Note*: If error happens when running the below command, try the following instead:
```{bash}
npm install --force
```
### Configure the environment
- For Back-end
If you want to use our existed MongoDB, first create a ".env" file in BE folder:
```{bash}
cd BE
nano .env
```
In the ".env" file, add the following:
```
ACCESS_TOKEN_KEY=ARandomString64BytesLong
REFRESH_TOKEN_KEY=AnotherRandomString64BytesLong
mongodb+srv://guest_user:xfQhVsUz2deIo3OY@cluster1.qajpv6r.mongodb.net/?retryWrites=true&w=majority
```
*Note*: You should keep your **ACCESS_TOKEN_KEY** and **REFRESH_TOKEN_KEY** as this is the key of authentication

- For Front-end:
To be able to see the map, you should have **your own Mapbox Access Token**.
First, you also need to create an ".env" in your FE folder:
```{bash}
cd BE
nano .env
```
To connect with the Back-end, you will need the following lines in your ".env" file:
```
REACT_APP_BACKEND_URL=http://localhost:1337
REACT_APP_MAPBOX_ACCESS_TOKEN=YourMapboxAccessTokenProvidedByMapbox
```
