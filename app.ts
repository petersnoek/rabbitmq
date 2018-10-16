import {connect} from 'amqplib'

export default class app {
    static listen() {
        connect('amqp://82.161.249.136', function(err, conn) {
            conn.createChannel(function(err, ch) {
                let q = '*';

                ch.assertQueue(q, {durable: false});
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
                ch.consume(q, function(msg) {
                    console.log(" [x] Received %s", msg.content.toString());
                }, {noAck: true});
            });
        });
    }
}

app.listen();