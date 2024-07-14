
# Image Gallery

A test application of an Image Gallery with basic operation


## API Reference

#### Get all items

**API: [https://7wnenbveal.execute-api.ap-south-1.amazonaws.com/dev](https://7wnenbveal.execute-api.ap-south-1.amazonaws.com/dev)**

```http
  GET /bucket
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Not Required**.          |

#### Get item

```http
  GET /bucket/file?file_name={file.ext}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `file.ext`      | `string` | **Required**. File Name as query parameter |

#### Delete item

```http
  DELETE /bucket/file?file_name={file.ext}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `file.ext`      | `string` | **Required**. File Name as query parameter |

## Run Locally

Clone the project

```bash
  git clone https://github.com/xanderbilla/ImageGallery
```

Go to the project directory

```bash
  cd ImageGallery
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Authors

- [@xanderbilla](https://www.github.com/xanderbilla)

