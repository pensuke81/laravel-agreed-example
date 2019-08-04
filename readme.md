# agreed test with Laravel backend

## agreed-client test from laravel

```php
public function testExampleTest()
{
    $host = config('app.host');
    $port = config('app.port');
    exec("yarn --cwd frontend/vue run agreed-client --path ./agreed/index.ts --host {$host} --port {$port}", $output);
    $this->assertTrue(strpos($output[2], 'pass!') !== false);
}
```

## agreed test

### sucess test

```bash
$ yarn run agreed-client --path ./agreed/index.ts --host 127.0.0.1 --port 8000
yarn run v1.16.0
$ /laravel-vue-agreed/frontend/vue/node_modules/.bin/agreed-client --path ./agreed/index.ts --host 127.0.0.1 --port 8000
✔ pass! GET /api/test/1
✨  Done in 0.69s.
```

### failed test

```bash
$ yarn run agreed-client --path ./agreed/index.ts --host 127.0.0.1 --port 8000
yarn run v1.16.0
$ /laravel-vue-agreed/frontend/vue/node_modules/.bin/agreed-client --path ./agreed/index.ts --host 127.0.0.1 --port 8000
✗ fail! GET /api/test/1
body:  { data:
   { string: 'hello',
     number: 1,
     stringNumber: 1,
     object: { key: 'value' },
     array: [ 1, 2, 3 ] } }
data.stringNumber
mismatch type, agreed type is string, but actual type is number
agreed:  1
actual:  1

✨  Done in 0.76s.
```
