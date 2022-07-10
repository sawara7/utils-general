# my-utils
自動売買Bot用の共通ライブラリ

## Setup
```
npm install github:sawara7/my-utils
```

## Features

### UUID
各オブジェクトのスーパークラスにしてUUIDを持たせる
```
import { UUIDInstanceClass } from 'my-utils'

export class = TradeObjectXXX extends UUIDInstanceClass {
    ...
}

```