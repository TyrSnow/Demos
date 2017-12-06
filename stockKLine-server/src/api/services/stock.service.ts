import Stock from '../models/Stock.model'

class StockSrv {
    create(
        code: string
    ) {
        let stock = new Stock({
            code: code
        });

        return stock.save()
    }
    
    create_list(

    ) {

    }

    query(

    ) {

    }

    update(

    ) {

    }

    delete(

    ) {

    }
}

export default StockSrv