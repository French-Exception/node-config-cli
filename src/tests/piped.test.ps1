import-module pester

describe "Set Piped" {

    $bin_fullpath = ""
    $testDir = $null
    $actualdir = get-location

    AfterAll {
        set-location $actualdir
    }

    beforeEach {
        $bin_fullpath = "$PSScriptRoot\..\..\"
        $testDir = (Get-Item 'TestDrive:\').FullName
        set-location $testDir
        node "$bin_fullpath\dist\cli.js" init
    }

    It "can get piped string" {
        "lol" | node  "$bin_fullpath\dist\cli.js" set test.pipe null --pipe
        $tested = node "$bin_fullpath\dist\cli.js" get test.pipe
        $tested | should -be "lol"
    }

    It "can set string" {
        node "$bin_fullpath\dist\cli.js" set test.value "ahah"
        $tested = node "$bin_fullpath\dist\cli.js" get test.value
        $tested | should -be "ahah"
    }

    It "can get piped json" {
        '{"coucou": "lol"}' | node  "$bin_fullpath\dist\cli.js" set test.piped null --pipe --json
        $tested = node  "$bin_fullpath\dist\cli.js" get test.piped | convertfrom-json
        $tested.coucou | should -be "lol"
    }
}
