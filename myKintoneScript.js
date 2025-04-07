(() => {
    'use strict';
    kintone.events.on('app.record.create.show', (event) => {
      const record = event.record;
      record['lastname'].value = 'こんにちは、kintone!';
      record['lastname'].disabled = true;
      return event;
    });
  })();


  (function() {
    'use strict';
  
    // 編集画面を開いたときのイベント
    kintone.events.on('app.record.index.edit.show', function(event) {
        console.log('編集画面に入りましたよ');
        console.log('lastnameの値：', event.record['lastname']);
      // lastnameフィールドを編集不可に設定
      event.record['lastname'].disabled = true;
      return event;
    });
  
  })();
  