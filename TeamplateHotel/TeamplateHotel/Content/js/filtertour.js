
var getData = {

    searchString: '',

    paging: {
        page: 1,
        pageSize: 10
    },

    filter: {
        menus: [],
        activities: []
    },

    sort: {
        recommend: 0,
        price: 0
    },

    data: {
        search: null,
        paging: null,
        filter: {
            menus: null,
            activities: null
        },
        sort: null
    },

    getValue: function () {
        var listMenuFilter = [];
        var listActivityFilter = [];

        this.searchString = $('#input').val();

        for (let i = 0; i < $('.menu-filter:checkbox:checked').length; i++) {
            listMenuFilter.push($($('.menu-filter:checkbox:checked')[i]).data('id'));
        }
       // this.filter.menus = listMenuFilter;

        for (let i = 0; i < $('.activity-filter:checkbox:checked').length; i++) {
            listActivityFilter.push($($('.activity-filter:checkbox:checked')[i]).data('id'));
        }

        //this.filter.activities = listActivityFilter;

        this.filter = {
            menus: listMenuFilter,
            activities: listActivityFilter
        }
        this.sort.recommend = $('#recommend').data('value');

        this.sort.price = $('#pricehigh').data('value');

        this.data = {
            search: this.searchString,
            paging: this.paging,
            filter: this.filter,
            sort: this.sort
        }
    },

    init: function () {
        var parent = this;
        $('.menu-filter').click(function () {
            parent.getDataAjax(parent);
        });

        $('.activity-filter').click(function () {
            parent.getDataAjax(parent);
        });
        this.getDataAjax(parent);
    },

    getDataAjax: function (parent) {

        this.getValue();
        console.log(this.data);
        $.ajax({
            method: "POST",
            url: '/filter',
            data: JSON.stringify(this.data),
            dataType: 'JSON',
            contentType: "application/json",
            success: function (res) {
                if (res.status) {
                    parent.bindData(res.data);
                }
            },
            error: function (data) {
                alert("false", data);
            }
        });
    },
    bindData: function (data) {
        var html = this.template(data);
        $('.wrap_lisst').html(html);
        this.pagingData(response.total);
    },

    template: function (data) {
        var html = '';
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            html += '<div class="item_list">';
            html += '<div class="img_lefft">';
            html += '<a href="/' + item.MenuAlias +'/'+item.Alias+' " title="">';
            html += '<img src="'+item.Image+'" alt="" height="158">';
            html += '</a>';
            html += '</div>';
            html += '<div class="content_right">';
            html += '<div class="wrap_content_main">';
            html += '<h3><a href="" title="">'+ item.Title+'</a></h3>';
            html += '<p>Des</p>';
            html += '<span><i class="far fa-map-marker-alt"></i>&nbsp;' + item.Location +'</span>';
            html += '</div>';
            html += '<div class="wrap_price">';
            html += '<span class="price_old">$' + item.Price +'vnđ</span>';
            html += '<span class="price_new"> <span class="price">$ ' + item.PriceSale +' </span> vnđ </span>';
            html += '<a class="select" href="" title="">Chi tiết</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    pagingData: function(totalRow, callBack) {

        var totalPage = Math.ceil(totalRow / this.paging.pageSize);
        $('#pagination').twbsPagination({
            totalPages: totalPage,
            first: "Đầu",
            next: "Tiếp",
            last: "Cuối",
            prev: "Trước",
            visiblePages: 10,
            onPageClick: function(event, page) {
                this.paging.page = page;
                setTimeout(callBack, 200);
            }
        });
    }
}


$(document).ready(function () {
    getData.init();
});
