class Matrix {
    constructor(array) {
        this.array = array;
        this.rowl = array[0].length;
        this.coll = array.length;
        return this;
    }
    get(i, j) {
        return this.array[j][i];
    }
    getRow(i) {
        return this.array[i];
    }
    getCol(j) {
        var h = [];
        var that = this;
        for (var i = 0; i < that.array.length; i++) {
            h.push(that.array[i][j]);
        }
        return h;
    }
    set(i, j, num) {
        this.array[j][i] = num;
        return this;
    }
    multiply(matrix) {
        var that = this;
        var arr = [];
        for (var x = 0; x < this.rowl; x++) {
            arr.push([]);
        }
        for (var x = 0; x < this.rowl; x++) {
            for (var y = 0; y < this.coll; y++) {
                console.log(matrix.getCol(x), that.getRow(y));
                arr[y][x] = scal(matrix.getCol(x), that.getRow(y));
            }


        }
        return new Matrix(arr);
    }
}


function scal(a, b) {
    var g = 0;
    for (var i = 0; i < a.length; i++) {
        g += a[i] * b[i];
    }
    return g
}
var currentx = 0;
$(document).ready(function () {

    $('#makegui').on('click', function () {
        makeGUI(Number($('#x').val()));
        currentx = Number($('#x').val());
    });

    $('#calc').on('click', async function () {
        var arra = [];
        var arrb = [];
        for (var x = 0; x < currentx; x++) {

            arra.push([]);
            arrb.push([]);
        }
        for (var x = 0; x < currentx; x++) {
            for (var y = 0; y < currentx; y++) {
                arra[x][y] = Number($(`#_${x}_${y}_1`).val());
                arrb[x][y] = Number($(`#_${x}_${y}_2`).val());
            }
        }
        console.log(arra, arrb);
        var ma = new Matrix(arra);
        var mb = new Matrix(arrb);
        var mc = ma.multiply(mb);
        var num = currentx
        for (var x = 0; x < num; x++) {
            var col = $(`<div class="col"></div>`)
            for (var y = 0; y < num; y++) {
                col.append($(`
                <div class="roww">${mc.get(y,x)}</div>
            `))
            }
            $('._3').append(col);
        }
    });

});

function makeGUI(num) {
    $('.main-c').html(`
    <div class="matrix-c _1">
    </div>
    <div class="matrix-c _2">
    </div>
    <div class="matrix-c _3">
    </div>`);
    for (var x = 0; x < num; x++) {
        var col = $(`<div class="col"></div>`)
        for (var y = 0; y < num; y++) {
            col.append($(`
                <div class="row"><input type="text" id="_${x}_${y}_1"></div>
            `))
        }
        $('._1').append(col);
    }
    for (var x = 0; x < num; x++) {
        var col = $(`<div class="col"></div>`)
        for (var y = 0; y < num; y++) {
            col.append($(`
                <div class="row"><input type="text" id="_${x}_${y}_2"></div>
            `))
        }
        $('._2').append(col);
    }
}