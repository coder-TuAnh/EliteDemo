
var getData = {

    searchString: '',

    paging: {
        page: 1,
        pageSize: 5
    },

    filter: {
        menus: [],
        activities: []
    },

    sort: {
        recommend: 1,
        price: 0,
        star: 0

    },

    data: {
        searchString: null,
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

        this.sort.price = $('#price-value').val();

        this.sort.star = $('#star').data('value');

        this.searchString = $('#search-value').val();

        //console.log(this.searchString);

        this.data = {
            searchString: this.searchString,
            paging: this.paging,
            filter: this.filter,
            sort: this.sort
        }
    },

    init: function () {
        var parent = this;

        $('.menu-filter').click(function () {
            $('#search-value').val('');
            parent.paging.page = 1;
            parent.getDataAjax(parent);
        });

        $('.activity-filter').click(function () {
            $('#search-value').val('');

            parent.paging.page = 1;
            parent.getDataAjax(parent);
        });

        $('#recommend').click(function () {
            parent.paging.page = 1;
            $('#recommend').data("value", parent.sort.recommend * -1);
            parent.getDataAjax(parent);
        });

        $('.price').click(function () {
            parent.paging.page = 1;
            var value = $(this).data('value');
            $('#price-value').val(value);
            parent.getDataAjax(parent);
        });

        this.getDataAjax(parent);

        this.pagination = $('#pagination');

        this.pagination.twbsPagination(this.options);


    },

    getDataAjax: function (parent) {
        //bắt đầu loading
        this.getValue();
        console.log(this.data);
        $.ajax({
            method: "POST",
            url: '/filter',
            data: JSON.stringify(this.data),
            dataType: 'JSON',
            contentType: "application/json",
            success: function (res) {
                if (res.count > 0) {
                    parent.bindData(res.data);
                    parent.pagingData(res.count);
                    //end loading
                    $("#data").ajaxloader("stop");
                    $("#toltaltour").text(res.count);
                    //$("#destour").text(res.data.TitleMenu);
                } else if (res.count === 0) {

                    parent.bindDataEmpty();
                    $("#toltaltour").text(res.count);
                    $("#data").ajaxloader("stop");



                }
            },
            error: function (data) {
                alert("Có lỗi xảy ra !");
            }
        });
    },
    bindData: function (data) {
        var html = this.template(data);
        $('.wrap_lisst').html(html);
    },
    bindDataEmpty: function () {
        var html = this.templateEmpty();
        $('.wrap_lisst').html(html);
    },
    template: function (data) {
        var html = '';
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            html += '<div class="item_list">';
            html += '<div class="img_lefft">';
            html += '<a href="/' + item.MenuAlias + '/' + item.ID + '/' + item.Alias + '" title="">';
            html += '<img src="' + item.Image + '" alt="" height="158">';
            html += '</a>';
            html += '</div>';
            html += '<div class="content_right">';
            html += '<div class="wrap_content_main">';
            html += '<h3><a href="/' + item.MenuAlias + '/' + item.ID + '/' + item.Alias + '" title="">' + item.Title + '</a></h3>';
            html += '<p>Des</p>';
            html += '<span><i class="far fa-map-marker-alt"></i>&nbsp;' + item.Location + '</span>';
            html += '</div>';
            html += '<div class="wrap_price">';
            html += '<span class="price_old">$' + item.Price + 'vnđ</span>';
            html += '<span class="price_new"> <span class="price">$ ' + item.PriceSale + ' </span> vnđ </span>';
            html += '<a class="select" href="/' + item.MenuAlias + '/' + item.ID + '/' + item.Alias + '" title="">Chi tiết</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    templateEmpty: function () {
        var html = '';
        html += '<div class="item_list">';
        html += '<h2>';
        html += 'Không có kết quả phù hợp với tìm kiếm của bạn!';
        html += '</h2>';
        html += '</div>';
        return html;
    },

    pagination: null,
    options: {
        totalPages: 20,
        first: "Đầu",
        next: "Tiếp",
        last: "Cuối",
        prev: "Trước",
        visiblePages: 5,
        initiateStartPageClick: false

    },
    pagingData: function (count, callBack) {
        var parent = this;
        var totalPages = Math.ceil(count / parent.paging.pageSize);

        parent.pagination.twbsPagination('destroy');
        parent.pagination.twbsPagination($.extend({}, parent.options, {
            startPage: parent.paging.page,
            totalPages: totalPages,
            onPageClick: function (event, page) {
                parent.paging.page = page;
                parent.getDataAjax(parent);
            }

        }));

    }

}


$(document).ready(function () {
    getData.init();
});
