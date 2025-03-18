function ModuloFacturacion(){
    return(
        <aside className="modulo-facturacion">
            <header>
        <main class="head">
            <div class="datos">
                <div class="izquierda">
                    <h1>Maya</h1>
                    <h3 id="nombre">Juan Guillermo Uribe</h3>
                    <h5>Jefe punto de venta</h5>
                </div> 
            </div>
        </main>
    </header>
    <nav>
        <a href="">Ingresar Factura</a>
        <a href="">Mermas</a>
        <a href="">Cierre caja</a>
        <a href="">Informes de venta</a>
        <a href="">Inventario</a>
        <a href="">Auditoria</a>
        <a href="login.html" class="img">
            <img src="Iamgenes/salida.png" alt="" />
        </a>
    </nav>
    <main className="Maya">
        <div className="ftomulario">
            <h1>Generador de Facturas</h1>
            <form action="" id="invoiceForm">
                <label htmlFor="costumerName">Nombre Cliente</label>
                <input type="text" id="custumerName" /><br /><br />
                <label for="invoiceDate">Fecha:</label>
                <input type="date" id="invoiceDate" required /><br/><br></br>
                <label>Artículos:</label>
                <div className="itemsContainer">
                    <div className="item">
                         <input type="text" placeholder="Descripción" class="description" required /> 
                         <input type="number" placeholder="Cantidad" class="quantity" min="1" required />
                         <input type="number" placeholder="Precio Unitario" class="unitPrice" min="0.01" step="0.01" required />
                    </div>
                </div><br /><br />
                <button type="button" onclick="addItem()">Añadir Artículo</button><br /><br />
                <div className="formasPago">
                    <input type="radio" id="Efectivo" name="FPago" value="Efectivo" />
                    <div className="radio-title">
                        <img  src="Iamgenes/Efectivo.png" alt="" />
                        <label for="Efectivo">Efectivo</label>
                    </div>
                    <input type="radio" id="Efectivo" name="FPago" value="Visa" />
            <div class="radio-title">
                <img src="Iamgenes/logo (1).png" alt="" />
                <label for="Efectivo">Visa</label>
            </div>
            <input type="radio" id="Efectivo" name="FPago" value="Master" />
            <div class="radio-title">
                <img src="Iamgenes/logo.png" alt="" />
                <label for="Efectivo">MasterCard</label>
            </div>
                    </div>  
            </form>
        </div>

    </main>
        </aside>
    )
}

export default ModuloFacturacion