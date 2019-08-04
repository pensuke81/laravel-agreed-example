<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A example test example.
     *
     * @return void
     */
    public function testExampleTest()
    {
        $host = config('app.host');
        $port = config('app.port');
        exec("yarn --cwd frontend/vue run agreed-client --path ./agreed/index.ts --host {$host} --port {$port}", $output);
        $this->assertTrue(strpos($output[2], 'pass!') !== false);
    }
}
