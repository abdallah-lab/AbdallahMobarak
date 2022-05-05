export default function Head(props) {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{props.title}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
  );
}
