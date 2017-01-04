const React = require('react');

const Modal = {

  show: modalRef => {
    $(`#${modalRef}`).modal({});

    $(`#${modalRef}`).find('.modal-dialog').css({ height: 'auto',
      'max-height': '100%' });
  },

  hide: modalRef => {
		$('#'+modalRef).modal('hide');
	},

	modalFromFactory: React.createClass({
		render: function() {

			let size = this.props.large ? 'modal-lg' : 'modal-md';
			if (this.props.small) {
				size = 'modal-sm';
			}

			var ModalComponent = this.props.factory;

			return (
				<div className="modal fade" id={this.props.modalref} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className={`modal-dialog ${size}`}>
						<div className="modal-content">
							<div className="modal-header">
                <button type="button" className="text-muted close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">{this.props.title}</h4>
            	</div>
            	<div className="modal-body">
								<ModalComponent {...this.props} />
							</div>
						</div>
					</div>
				</div>
			);
		}
	}),
}

module.exports = Modal;
